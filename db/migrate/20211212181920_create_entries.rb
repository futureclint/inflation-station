class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :starting_value
      t.string :starting_year
      t.string :ending_value
      t.string :ending_year
      t.string :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
