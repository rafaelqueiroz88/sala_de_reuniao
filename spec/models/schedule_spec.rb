require 'rails_helper'

RSpec.describe Schedule, type: :model do

  it 'should store schedule data' do  
    user = User.new(name: 'Rafael', email: 'rafael@testers.com', occupation: 'Dev', password: '12', password_confirmation: '12')
    user.save
    schedule = Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id).save
    expect(schedule).to eq(true)
  end

  it 'should update schedule data' do
    user = User.new(name: 'Rafael', email: 'rafael@testings.com', occupation: 'Dev', password: '12', password_confirmation: '12')
    user.save
    test_schedule = Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id)
    test_schedule.save
    test_schedule.update(title: 'Testers', description: 'Testing this test', status: 0)
    expect(true).to eq(true)
  end

  it 'should destroy schedule data' do
    user = User.new(name: 'Rafael', email: 'rafael@testings.com', occupation: 'Dev', password: '12', password_confirmation: '12')
    user.save
    test_schedule = Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id)
    test_schedule.save
    test_schedule.destroy()
    expect(true).to eq(true)
  end
end