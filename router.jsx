//Libraries
import React from 'react';
import {mount} from 'react-mounter';

//Layouts
import {LayoutView} from './bin/views/layout/layoutView.jsx';

//Views
import Test from './bin/views/test/testView.jsx';

FlowRouter.route("/", {
    action: function() {
      mount(LayoutView,{
        content : (<Test />)
      });
    }
});
