Rails.configuration.to_prepare do
  Citadel.product_type = ENV.fetch('API_PRODUCT_TYPE')
end