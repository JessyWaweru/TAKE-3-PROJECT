# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "seeding"

  # create a user1 data
  User.create(
    username: "user",
    password: "password",
    email: "user@mail.com",
    gender: "Female",
    age: 18
  )


Event.create(
    title: "Autism foundation",
    image: "https://w0.peakpx.com/wallpaper/608/924/HD-wallpaper-autism-speaks-awareness-purple-april-puzzle-asd-autism.jpg",
    description: "We take a look at how we have come in our knowledge and understanding of Autism",
    location: "Central Park, New York City",
    age_limit: "All ages",
    capacity: 5000,
    date: Faker::Time.forward(days: 5, period: :evening, format: :long),
    user: User.find_by(id: User.pluck(:id).sample),  # Random user ID
    sponsor: Sponsor.find_by(id: Sponsor.pluck(:id).sample)  # Random sponsor ID
)
num_events = 10  # Number of events to create

num_events.times do
  event = Event.create(
    title: Faker::Lorem.sentence,
    image: Faker::Internet.url,
    description: Faker::Lorem.paragraph,
    location: Faker::Address.city,
    age_limit: Faker::Number.between(from: 18, to: 99).to_s + '+',
    capacity: Faker::Number.between(from: 100, to: 1000),
    date: Faker::Time.forward(days: 5, period: :evening, format: :long),
    user: User.find_by(id: User.pluck(:id).sample),  # Random user ID
    sponsor: Sponsor.find_by(id: Sponsor.pluck(:id).sample)  # Random sponsor ID
  )
  
  puts "Created event with ID: #{event.id}"
end
Sponsor.create(
  title: "Google",
  organisation: "Google Inc.",
  category: "Technology",
  industry: "Software"
)
Sponsor.create(
  title: "Nike",
  organisation: "Nike Inc.",
  category: "Fashion",
  industry: "Sportswear"
)
Sponsor.create(
  title: "Coca-Cola",
  organisation: "The Coca-Cola Company",
  category: "Food and Beverage",
  industry: "Beverages"
)

Speaker.create([
  {
    name: "John Doe",
    email: "johndoe@example.com",
    event_id: 1,
    organisation: "ABC Company",
    job_title: "CEO"
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    event_id: 1,
    organisation: "XYZ Corporation",
    job_title: "VP of Marketing"
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    event_id: 1,
    organisation: "123 Enterprises",
    job_title: "CTO"
  }
])
 Attendee.create([
  {
    name: "Samantha Lee",
    email: "samanthalee@example.com",
    user_id: 1,
    event_id: 3
  },
  {
    name: "David Kim",
    email: "davidkim@example.com",
    user_id: 2,
    event_id: 1
  },
  {
    name: "Jennifer Chen",
    email: "jenniferchen@example.com",
    user_id: 3,
    event_id: 3
  }
 ])
 
 puts "done seeding"