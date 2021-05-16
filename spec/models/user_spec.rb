require 'rails_helper'

RSpec.describe User, type: :model do

  context 'validation tests' do

    it 'ensures name presence' do
      user = User.new(email: 'sample@testing.com', occupation: 'app tester', password: '123').save
      expect(user).to eq(false)
    end

    it 'ensures email presence' do
      user = User.new(name: 'test', occupation: 'app tester', password: '123').save
      expect(user).to eq(false)
    end

    it 'ensures password presence' do
      user = User.new(name: 'test', email: 'sample@testing.com', occupation: 'app tester').save
      expect(user).to eq(false)
    end

    it 'ensures occupation presente' do
      user = User.new(name: 'test', email: 'sample@testing.com', password: '123').save
      expect(user).to eq(false)
    end

    it 'should store data' do
      user = User.new(name: 'test', email: 'sample@testing.com', occupation: 'app tester', password: '123').save
      expect(user).to eq(true)
    end
  end

  context 'scope tests' do

  end
end