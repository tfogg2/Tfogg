class ContactsController < ApplicationController
	def new
		@contact = Contact.new

	end 

	def create
	    @contact = Contact.new(params[:contact])
	    @contact.request = request
      if @contact.deliver
      	flash.now[:error] = nil
      	flash.now[:notice] = 'Thank you for your message!'
      	redirect_to '/'
      else
      	flash.now[:error] = 'Cannot send message.'
      	redirect_to '/'
   	  end
	end

	def contact_params
      params.require(:contact).permit(:message, :to_email, :email, :name, :from_email)
    end
end
