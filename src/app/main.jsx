import React from 'react';
import ReactDOM from 'react-dom';
import { TreeView} from '@progress/kendo-react-treeview'
import '@progress/kendo-react-animation'
    const tree = [
       {
         text : "Local Disk (:C) ", expanded : false , items:
            [
                {
                    text: 'Program Files', expanded: false, items: [
                    { text: 'Windows NT' }, { text: 'Windows Mail' }, { text: 'Windows Photo Viewer' }]
                },
                {
                    text: 'Users', items: [
                    { text: 'Nishant ' }, { text: 'Siddharth' }]
                },
                {
                    text: 'Windows ', items: [
                    { text: 'Boot  ' }, { text: 'File Manager' }]
                }
            ]
       },
       {
        text : "Local Disk (:D) ", expanded : false , items:
           [
               {
                   text: 'Personals', expanded: false, items: [
                   { text: 'MyPhoto.png' }, { text: 'Resume.pdf' }]
               },
               {
                   text: 'Projects', items: [
                   { text: 'Calculator Application ' }, { text: 'Notes Application' }]
               },
               {
                   text: 'Office  ', items: [
                   { text: 'Reports.docx  ' }]
               }
           ]
      },
      {
      text : "Local Disk (:E) ", expanded : false , items:
           [
               {
                   text: 'Pictures ', expanded: false, items: [
                   { text: 'Cat.png' }]
               },
               {
                   text: 'Documents ', items: [
                   { text: 'ProgressReport.docx' }, { text: 'DesignDoc.pdf ' }]
               },
               {
                   text: 'Study Materials', items: [
                   { text: 'HTML.html ' }, {text : 'Css.pdf'}, {text: 'JS.pdf'}]
               }
           ]
      }

];

    class App extends React.Component {
        render() {
            return (
                <TreeView
                    data={tree}
                    expandIcons={true}
                    onExpandChange={this.onExpandChange}
                    onItemClick={this.onItemClick}
                    aria-multiselectable={true}
                />
            );
        }
        onItemClick = (event) => {
            event.item.selected = !event.item.selected;
            this.forceUpdate();
        }
        onExpandChange = (event) => {
            event.item.expanded = !event.item.expanded;
            this.forceUpdate();
        }
    }

    ReactDOM.render(
        <App />,
        document.querySelector('my-app')
    );

