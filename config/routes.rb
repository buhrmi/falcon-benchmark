Rails.application.routes.draw do

  get "up", to: "rails/health#show"

  inertia "/" => "welcome"
  
end
