Tfogg::Application.routes.draw do
 
  root 'pages#home'
  get 'about', to: 'pages#about', as: :about
  get 'school', to: 'pages#school', as: :school
  get 'work', to: 'pages#work', as: :work
  get 'adventure', to: 'pages#adventure', as: :adventure






end
