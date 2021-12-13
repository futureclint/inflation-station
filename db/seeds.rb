# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Destroy all data
CpiDatum.destroy_all
Entry.destroy_all
User.destroy_all

# Create users
@admin = User.create!(email: 'user@email.com', password: '123456')

# Print users created
puts "#{User.count} users created"

# Create entries
Entry.create!(starting_value: 1.00, starting_year: '1913', ending_value: 28.08, ending_year: '2021', user: @admin)
Entry.create!(starting_value: 199.99, starting_year: '1991', ending_value: 408.13, ending_year: '2021', description: 'SNES', user: @admin)

# Print entries created
puts "#{Entry.count} entries created"

# Create CPI Data, from oldest to newest
CpiDatum.create!(year: '1913', avg_cpi: 9.9)
CpiDatum.create!(year: '1914', avg_cpi: 10.0)
CpiDatum.create!(year: '1915', avg_cpi: 10.1)
CpiDatum.create!(year: '1916', avg_cpi: 10.9)
CpiDatum.create!(year: '1917', avg_cpi: 12.8)
CpiDatum.create!(year: '1918', avg_cpi: 15.1)
CpiDatum.create!(year: '1919', avg_cpi: 17.3)
CpiDatum.create!(year: '1920', avg_cpi: 20.0)
CpiDatum.create!(year: '1921', avg_cpi: 17.9)
CpiDatum.create!(year: '1991', avg_cpi: 136.2)
CpiDatum.create!(year: '2021', avg_cpi: 270.258)

# Create variables for first and last row of CPI data
@cpi_first = CpiDatum.first.year
@cpi_last = CpiDatum.last.year

# Print CPI data created between which two years
puts "#{CpiDatum.count} rows of CPI data created, from #{@cpi_first} to #{@cpi_last}"
