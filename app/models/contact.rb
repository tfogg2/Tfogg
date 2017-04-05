class Contact < MailForm::Base
  include MailForm::Delivery
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message,   :validate => true


  # attribute :from_email    
  # validates_format_of :from_email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i



  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Contact Form",
      :to => "foggts@g.cofc.edu",
      :from => %("#{name}" <#{email}>)
    }
  end


end
