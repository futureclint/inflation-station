class CpiDataController < ApplicationController
  before_action :set_cpi_datum, only: [:show, :update, :destroy]

  # GET /cpi_data
  def index
    @cpi_data = CpiDatum.all

    render json: @cpi_data
  end

  # GET /cpi_data/1
  def show
    render json: @cpi_datum
  end

  # POST /cpi_data
  def create
    @cpi_datum = CpiDatum.new(cpi_datum_params)

    if @cpi_datum.save
      render json: @cpi_datum, status: :created, location: @cpi_datum
    else
      render json: @cpi_datum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cpi_data/1
  def update
    if @cpi_datum.update(cpi_datum_params)
      render json: @cpi_datum
    else
      render json: @cpi_datum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cpi_data/1
  def destroy
    @cpi_datum.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cpi_datum
      @cpi_datum = CpiDatum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cpi_datum_params
      params.require(:cpi_datum).permit(:year, :avg_cpi)
    end
end
