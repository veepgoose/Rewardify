json.extract! wishlist, :id, :title, :description, :created_at, :updated_at
json.url wishlist_url(wishlist, format: :json)
