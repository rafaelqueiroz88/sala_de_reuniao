require 'rails_helper'

RSpec.describe Schedule, type: :model do

  it 'should store schedule data' do  
    user = User.new(name: 'Rafael', email: 'rafael@testers.com', occupation: 'Dev', password: '12', password_confirmation: '12')
    user.save
    schedule = Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id).save
    expect(true).to eq(schedule)
  end

  it 'should update schedule data' do
    user = User.new(name: 'Rafael', email: 'rafael@testings.com', occupation: 'Dev', password: '12', password_confirmation: '12')
    user.save
    test_schedule = Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id)
    test_schedule.save
    test_schedule.update(title: 'Testers', description: 'Testing this test', status: 0)
    expect(Schedule.all.last).to eq(test_schedule)
  end

  it 'should destroy schedule data' do
    user = User.new(name: 'Rafael', email: 'rafael@testings.com', occupation: 'Dev', password: '12', password_confirmation: '12')
    user.save
    test_schedule = Schedule.new(title: 'test', description: 'testing', status: 0, user_id: user.id)
    test_schedule.save
    schedule_id = test_schedule.id
    test_delete = schedules = Schedule.all
    test_delete.delete(schedule_id)
    expect(test_delete.last).to eq(schedules.last)
  end
end