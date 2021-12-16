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
CpiDatum.create!(year: '1922', avg_cpi: 16.8)
CpiDatum.create!(year: '1923', avg_cpi: 17.1)
CpiDatum.create!(year: '1924', avg_cpi: 17.1)
CpiDatum.create!(year: '1925', avg_cpi: 17.5)
CpiDatum.create!(year: '1926', avg_cpi: 17.7)
CpiDatum.create!(year: '1927', avg_cpi: 17.4)
CpiDatum.create!(year: '1928', avg_cpi: 17.1)
CpiDatum.create!(year: '1929', avg_cpi: 17.1)
CpiDatum.create!(year: '1930', avg_cpi: 16.7)
CpiDatum.create!(year: '1931', avg_cpi: 15.2)
CpiDatum.create!(year: '1932', avg_cpi: 13.7)
CpiDatum.create!(year: '1933', avg_cpi: 13.0)
CpiDatum.create!(year: '1934', avg_cpi: 13.4)
CpiDatum.create!(year: '1935', avg_cpi: 13.7)
CpiDatum.create!(year: '1936', avg_cpi: 13.9)
CpiDatum.create!(year: '1937', avg_cpi: 14.4)
CpiDatum.create!(year: '1938', avg_cpi: 14.1)
CpiDatum.create!(year: '1939', avg_cpi: 13.9)
CpiDatum.create!(year: '1940', avg_cpi: 14.0)
CpiDatum.create!(year: '1941', avg_cpi: 14.7)
CpiDatum.create!(year: '1942', avg_cpi: 16.3)
CpiDatum.create!(year: '1943', avg_cpi: 17.3)
CpiDatum.create!(year: '1944', avg_cpi: 17.6)
CpiDatum.create!(year: '1945', avg_cpi: 18.0)
CpiDatum.create!(year: '1946', avg_cpi: 19.5)
CpiDatum.create!(year: '1947', avg_cpi: 22.3)
CpiDatum.create!(year: '1948', avg_cpi: 24.1)
CpiDatum.create!(year: '1949', avg_cpi: 23.8)
CpiDatum.create!(year: '1950', avg_cpi: 24.1)
CpiDatum.create!(year: '1951', avg_cpi: 26.0)
CpiDatum.create!(year: '1952', avg_cpi: 26.5)
CpiDatum.create!(year: '1953', avg_cpi: 26.7)
CpiDatum.create!(year: '1954', avg_cpi: 26.9)
CpiDatum.create!(year: '1955', avg_cpi: 26.8)
CpiDatum.create!(year: '1956', avg_cpi: 27.2)
CpiDatum.create!(year: '1957', avg_cpi: 28.1)
CpiDatum.create!(year: '1958', avg_cpi: 28.9)
CpiDatum.create!(year: '1959', avg_cpi: 29.1)
CpiDatum.create!(year: '1960', avg_cpi: 29.6)
CpiDatum.create!(year: '1961', avg_cpi: 29.9)
CpiDatum.create!(year: '1962', avg_cpi: 30.2)
CpiDatum.create!(year: '1963', avg_cpi: 30.6)
CpiDatum.create!(year: '1964', avg_cpi: 31.0)
CpiDatum.create!(year: '1965', avg_cpi: 31.5)
CpiDatum.create!(year: '1966', avg_cpi: 32.4)
CpiDatum.create!(year: '1967', avg_cpi: 33.4)
CpiDatum.create!(year: '1968', avg_cpi: 34.8)
CpiDatum.create!(year: '1969', avg_cpi: 36.7)
CpiDatum.create!(year: '1970', avg_cpi: 38.8)
CpiDatum.create!(year: '1971', avg_cpi: 40.5)
CpiDatum.create!(year: '1972', avg_cpi: 41.8)
CpiDatum.create!(year: '1973', avg_cpi: 44.4)
CpiDatum.create!(year: '1974', avg_cpi: 49.3)
CpiDatum.create!(year: '1975', avg_cpi: 53.8)
CpiDatum.create!(year: '1976', avg_cpi: 56.9)
CpiDatum.create!(year: '1977', avg_cpi: 60.6)
CpiDatum.create!(year: '1978', avg_cpi: 65.2)
CpiDatum.create!(year: '1979', avg_cpi: 72.6)
CpiDatum.create!(year: '1980', avg_cpi: 82.4)
CpiDatum.create!(year: '1981', avg_cpi: 90.9)
CpiDatum.create!(year: '1982', avg_cpi: 96.5)
CpiDatum.create!(year: '1983', avg_cpi: 99.6)
CpiDatum.create!(year: '1984', avg_cpi: 103.9)
CpiDatum.create!(year: '1985', avg_cpi: 107.6)
CpiDatum.create!(year: '1986', avg_cpi: 109.6)
CpiDatum.create!(year: '1987', avg_cpi: 113.6)
CpiDatum.create!(year: '1988', avg_cpi: 118.3)
CpiDatum.create!(year: '1989', avg_cpi: 124.0)
CpiDatum.create!(year: '1990', avg_cpi: 130.7)
CpiDatum.create!(year: '1991', avg_cpi: 136.2)
CpiDatum.create!(year: '1992', avg_cpi: 140.3)
CpiDatum.create!(year: '1993', avg_cpi: 144.5)
CpiDatum.create!(year: '1994', avg_cpi: 148.2)
CpiDatum.create!(year: '1995', avg_cpi: 152.4)
CpiDatum.create!(year: '1996', avg_cpi: 156.9)
CpiDatum.create!(year: '1997', avg_cpi: 160.5)
CpiDatum.create!(year: '1998', avg_cpi: 163.0)
CpiDatum.create!(year: '1999', avg_cpi: 166.6)
CpiDatum.create!(year: '2000', avg_cpi: 172.2)
CpiDatum.create!(year: '2001', avg_cpi: 177.1)
CpiDatum.create!(year: '2002', avg_cpi: 179.9)
CpiDatum.create!(year: '2003', avg_cpi: 184.0)
CpiDatum.create!(year: '2004', avg_cpi: 188.9)
CpiDatum.create!(year: '2005', avg_cpi: 195.3)
CpiDatum.create!(year: '2006', avg_cpi: 201.6)
CpiDatum.create!(year: '2007', avg_cpi: 207.3)
CpiDatum.create!(year: '2008', avg_cpi: 215.303)
CpiDatum.create!(year: '2009', avg_cpi: 214.537)
CpiDatum.create!(year: '2010', avg_cpi: 218.056)
CpiDatum.create!(year: '2011', avg_cpi: 224.939)
CpiDatum.create!(year: '2012', avg_cpi: 229.594)
CpiDatum.create!(year: '2013', avg_cpi: 232.957)
CpiDatum.create!(year: '2014', avg_cpi: 236.736)
CpiDatum.create!(year: '2015', avg_cpi: 237.017)
CpiDatum.create!(year: '2016', avg_cpi: 240.007)
CpiDatum.create!(year: '2017', avg_cpi: 245.120)
CpiDatum.create!(year: '2018', avg_cpi: 251.107)
CpiDatum.create!(year: '2019', avg_cpi: 255.657)
CpiDatum.create!(year: '2020', avg_cpi: 258.811)
CpiDatum.create!(year: '2021', avg_cpi: 270.258)

# Create variables for first and last row of CPI data
@cpi_first = CpiDatum.first.year
@cpi_last = CpiDatum.last.year

# Print CPI data created between which two years
puts "#{CpiDatum.count} rows of CPI data created, from #{@cpi_first} to #{@cpi_last}"
