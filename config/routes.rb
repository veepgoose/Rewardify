Rails.application.routes.draw do
  get 'pages/goals'
  devise_for :users
  delete 'users/sign_out' => 'devise/sessions#destroy'
  resources :wishlists

  root "pages#dashboard"
end
