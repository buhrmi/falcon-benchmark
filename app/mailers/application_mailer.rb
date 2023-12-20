class ApplicationMailer < ActionMailer::Base
  default from: "noreply <noreply@email.com>"
  layout "mailer"
end
