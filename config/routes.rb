Rails.application.routes.draw do

  # setup for sidekiq
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :schedules, param: :slug
      resources :users, param: :slug
      post "/login", to: "users#login"
      get "/auto_login", to: "users#auto_login"
    end
  end

  get '*path', to: 'pages#index', via: :all
end