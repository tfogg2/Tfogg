class ContactsController < ApplicationController
	def new
		@contact = Contact.new
		if Contact.new
    		Contact.new(params[:contact]).deliver
   		else

   		end
	end 

	def create
	    @contact = Contact.new(params[:contact])
	    @contact.request = request
	      if @contact.valid?
	      	@contact.deliver
	      	redirect_to '/'
	      	flash.now[:notice] = 'Thank you for your message!'
	      else
	      	flash.now[:error] = 'Cannot send message.'
	      	render :new
	   	  end
	end

	def contact_params
      params.require(:contact).permit(:message, :to_email, :email, :name)
    end
end
