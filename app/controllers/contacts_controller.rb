class ContactsController < ApplicationController
	def new
		@contact = Contact.new

	end

	def create
	    @contact = Contact.new(params[:contact])
	    @contact.request = request
			
			respond_to do |format|
	      if @contact.deliver
					format.html { redirect_to root_path, notice: 'Thank you for your message!'  }
	        format.json { render :show, status: :created, location: root_path }
	      else
	        format.html { render :new }
	        format.json { render json: @contact.errors, status: :unprocessable_entity }
	   	  end
		 end
	end

	def contact_params
      params.require(:contact).permit(:message, :to_email, :email, :name, :from_email)
    end
end
