class CreateCpiData < ActiveRecord::Migration[6.1]
  def change
    create_table :cpi_data do |t|
      t.string :year
      t.string :avg_cpi

      t.timestamps
    end
  end
end
