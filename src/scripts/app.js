import ReactDOM from 'react-dom'
import React from 'react'
import HomeView from './HomeView'

import Backbone from 'backbone'


const app = function() {

    const TaskModel = Backbone.Model.extend({
    })

    const TaskCollection = Backbone.Collection.extend({
        model: TaskModel
    })

    var TaskRouter = Backbone.Router.extend({
		routes: {	
			"*catchall": "showHomeView"
		},

		showHomeView: function(searchTerm) {
			ReactDOM.render(<HomeView taskColl={new TaskCollection()} />,document.querySelector('.container'))
		},
		initialize: function() {
			Backbone.history.start()
		}
	})

	new TaskRouter()

}

app()