export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dc7c27e91545240ba19f5f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-semrush-studio',
                  apiId: '04bdc23c-56a9-4a00-bd04-59845e795d6b'
                },
                {
                  buildHookId: '60dc7c272e87dd2668f003a9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-semrush',
                  apiId: '7226ac7b-3da9-4297-ae3f-57f368179afa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/sanity-kitchen-sink-semrush',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-semrush.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
