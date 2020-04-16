require 'sinatra'

get '/' do 
    slim :home
end

get '/deposits' do
    slim :deposits
end

post '/deposits' do
    puts params
end