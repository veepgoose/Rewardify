Rails.application.routes.draw do
  devise_for :users
  delete 'users/sign_out' => 'devise/sessions#destroy'
  resources :wishlists

  # root 'wishlists#index'
end
