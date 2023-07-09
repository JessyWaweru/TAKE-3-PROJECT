Rails.application.routes.draw do
  resources :users,only: [:index, :show, :create]
  resources :sponsors,only: [:index, :show, :create]
  resources :speakers,only: [:index, :show, :create]
  resources :events, only: [:index, :show, :create, :update, :destroy]
  resources :attendees,only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/login", to: "users#login"
  get "/users/:id/events", to: "users#get_all_user_events"
  delete '/logout', to: 'users#logout'
  # Defines the root path route ("/")
  # root "articles#index"
end
