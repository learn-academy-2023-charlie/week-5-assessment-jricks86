# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

def containg_letter array, letter
    array.select do |word|
        word.include?(letter)
    end
end

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
p containg_letter(beverages_array, filter_letter_o)

filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
p containg_letter(beverages_array, filter_letter_t)

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'


us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def alphabet_states hash
    new_states = hash.values.flatten
    new_states.sort
end

p alphabet_states us_states


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info 
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end
new_bike = Bike.new('Trek')
new_bike.bike_info 

# --------------------3b) Create a class called Car that is initialized with a model, wheels, and current_speed. The default number of wheels is 4

class Car < Bike
    def initialize(model, wheels = 4, current_speed)
        @model = model
        @wheels = wheels    
        @current_speed = current_speed
    end
end

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
        def bike_info 
            p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
        end
    
        def pedal_faster(speed_increase)
            @current_speed += speed_increase
            # Make sure the bike speed doesn't go negative
            @current_speed = [@current_speed, 0].max
        end
    
        def brake(speed_decrease)
            @current_speed -= speed_decrease
            # Make sure the bike speed doesn't go negative
            @current_speed = [@current_speed, 0].max
        end
    end
    
    
    # Create a new bike object and test the pedal_faster and brake methods
    my_bike = Bike.new('Trek')
    p my_bike.pedal_faster(10) # Expected output: 10
    p my_bike.pedal_faster(18) # Expected output: 28
    p my_bike.brake(5) # Expected output: 23
    p my_bike.brake(25) # Expected output: 0
   