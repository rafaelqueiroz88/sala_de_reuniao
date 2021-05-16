require 'rails_helper'

RSpec.describe "Schedules", type: :request do

  url = 'http://localhost:3000'

  user = User.new(name: 'Rafael', email: 'test@tests.com', occupation: 'tester', password: '123', password_confirmation: '123')
  user.save

  let(:valid_attributes) do
    {
      'email' => 'test@tests.com',
      'password' => '123'
    }
  end

  let(:valid_body) do
    {
      'title': 'Tests',
      'description': 'Testings',
      'status': 0,
      'user_id': 1,
      'hour': '2021-05-17 14:00:00'
    }
  end

  describe "GET /api/v1/schedules success" do
    it 'renders a successful response from schedules index' do
      user = User.new(name: 'Rafael', email: 'test@tests.com', occupation: 'tester', password: '123', password_confirmation: '123')
      user.save
      Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id, hour: '2021-05-17').save
      schedules = Schedule.search_week
      post "#{url}/api/v1/login", params: valid_attributes
      r = response.parsed_body
      token = r['token']
      get "#{url}/api/v1/schedules.json", as: :json, headers: { :Authorization => "Bearer #{token}" }
      expect(response.parsed_body.count).to eq(2)
    end
  end

  describe "POST /api/v1/schedules success" do
    it 'renders a successful response from schedules index' do
      user = User.new(name: 'Rafael', email: 'test@tests.com', occupation: 'tester', password: '123', password_confirmation: '123')
      user.save
      post "#{url}/api/v1/login", params: valid_attributes
      r = response.parsed_body
      token = r['token']
      post "#{url}/api/v1/schedules", params: valid_body, headers: { :Authorization => "Bearer #{token}" }
      expect(response.parsed_body.count).to eq(2)
    end
  end
end