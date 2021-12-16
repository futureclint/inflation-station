class EntriesController < ApplicationController
  before_action :set_entry, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user_entry, only: [:update, :destroy]

  # GET /entries
  def index
    @entries = Entry.all

    render json: @entries
  end

  # GET /entries/1
  def show
    render json: @entry
  end

  # POST /entries
  def create
    @entry = Entry.new(entry_params)
    @entry.user = @current_user

    # Retrieve starting and ending average CPI values by starting/end yaer
    @starting_datum = CpiDatum.find_by(year: @entry.starting_year).avg_cpi
    @ending_datum = CpiDatum.find_by(year: @entry.ending_year).avg_cpi

    # If starting year is before ending year: starting_value * ( ending_CPI / starting_CPI )
    # Else if starting year is after ending year: starting_value * ( starting_CPI / ending_CPI )
    # Else if they are equal, just make ending value equal to the starting value
    if @entry.starting_year < @entry.ending_year
      @entry.ending_value = (@entry.starting_value * ( @ending_datum / @starting_datum )).round(2)
    elsif @entry.starting_year > @entry.ending_year
      @entry.ending_value = (@entry.starting_value * ( @starting_datum / @ending_datum)).round(2)
    else
      @entry.ending_value = @entry.starting_value.round(2)
    end

    if @entry.save
      render json: @entry, status: :created
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entries/1
  def update
    if @entry.update(entry_params)
      render json: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /entries/1
  def destroy
    @entry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    def set_user_entry
      @entry = @current_user.entries.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def entry_params
      params.require(:entry).permit(:starting_value, :starting_year, :ending_value, :ending_year, :description, :user_id)
    end
end
