export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e50289a148742b17ee0b2fe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-d3p432sn',
                  apiId: '5dc1ad6b-82dc-4610-a0a8-734658d597df'
                },
                {
                  buildHookId: '5e50289aee454fba4bf92e91',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-web-b498xujp',
                  apiId: 'aef1419d-6f4c-43be-89c6-673692beab4b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samgrimard/sanity-gatsby-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-test-web-b498xujp.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
