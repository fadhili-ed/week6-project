require 'sinatra'
require 'csv'

get '/' do 
    slim :home
end

get '/deposits' do
    slim :deposits
end

post '/deposits' do
    puts params[:name]
    puts params[:amount]
    puts params[:date]
    CSV.open("db/deposits.csv", "ab", :write_headers => true, :headers => ["Name","Amount","Date"]) do |csv|
        csv << [params[:name], params[:amount], params[:date]]
    end
    slim :deposits
end

