export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5f4d92d049ba2f230b856f33',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nm2dvqmw',
                  apiId: '67413048-9fe8-4b8b-94cd-c49f46327e51'
                },
                {
                  buildHookId: '5f4d92d00dca7218436818d5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9pdxfsqc',
                  apiId: '90c53942-50b1-4cef-a46e-980dbe5d6f82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jseb2520/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9pdxfsqc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
