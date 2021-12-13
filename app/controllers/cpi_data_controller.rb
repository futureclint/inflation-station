class CpiDataController < ApplicationController

  # GET /cpi_data
  def index
    @cpi_data = CpiDatum.all

    render json: @cpi_data
  end

  # GET /cpi_data/1
  def show
    render json: @cpi_datum
  end

end
