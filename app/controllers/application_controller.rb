class ApplicationController < ActionController::Base
  use_inertia_instance_props

  rescue_from ActiveRecord::RecordInvalid do |exception|
    raise exception unless request.inertia?
    session[:errors] = exception.record.errors
    redirect_back(fallback_location: root_path)
  end
  
  rescue_from ActionController::BadRequest do |exception|
    flash[:error] = exception.message
    redirect_back(fallback_location: root_path)
  end
  
  inertia_share do
    {
      controller: controller_name,
      errors: session.delete(:errors),
      flash: flash.to_h
    }
  end

  before_action :set_current_url_options

  def set_current_url_options
    ActiveStorage::Current.url_options = {
      host: request.base_url,
      protocol: request.protocol
    }
  end

  def verify_authenticity_token
    super unless request.inertia?
  end

end
