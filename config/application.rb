require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module MyApp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.1
    config.active_support.isolation_level = :fiber
  
    # config.i18n.available_locales = [:en, :de]
    # config.i18n.default_locale = :de

    # config.hosts << "localhost"
    # config.after_initialize do
    #   Rails.application.config.hosts.concat Domain.all.map(&:domain)
    # end

    # config.action_mailer.smtp_settings = Rails.application.credentials.smtp
    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
