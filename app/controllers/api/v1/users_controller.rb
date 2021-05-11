module Api
    module V1
        class UsersController < ApplicationController

            protect_from_forgery with: :null_session

            before_action :authorized, except: [:create, :login]

            # @get: /api/v1/users.json
            def index
                users = User.all
                render json: UserSerializer.new(users, options).serialized_json
            end

            # @get: /api/v1/users/:slug
            def show
                user = User.find_by(slug: params[:slug])
                render json: UserSerializer.new(user, options).serialized_json
            end

            # @post: /api/v1/
            def login
                @user = User.find_by(email: params[:email])

                if @user && @user.authenticate(params[:password])
                    token = encode_token({user_id: @user.id})
                    render json: {user: @user, token: token}
                else
                    render json: {error: "Invalid e-mail or password"}
                end
            end

            def auto_login
                render json: @user
            end

            # @post: /api/v1/users/:slug
            def create
                # user = User.new(user_params)
                # if user.save
                #     render json: UserSerializer.new(user).serialized_json
                # else
                #     render json: { error: user.errors.message }, status: 422
                # end
                @user = User.create(user_params)
                if @user.valid?
                    token = encode_token({user_id: @user.id})
                    render json: { user: @user, token: token }
                else
                    render json: { error: "Invalid username or password" }
                end
            end

            # @patch: /api/v1/users/:slug
            def update
                user = User.find_by(slug: params[:slug])
                if user.update(user_params)
                    render json: UserSerializer.new(user, options).serialized_json
                else
                    render json: { error: user.errors.message }, status: 422
                end
            end

            # @delete: /api/v1/users/:slug
            def delete
                user = User.find_by(slug: params[:slug])
                if user.delete
                    head :no_content
                else
                    render json: { error: user.errors.message }, status: 422
                end
            end

            private

            def user_params
                params.require(:user).permit(:name, :email, :password, :occupation)
            end

            def options
                @options ||= { include: %i[schedules] }
            end
        end
    end
end