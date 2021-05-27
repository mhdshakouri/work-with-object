new Vue({
    data() {
      return {
        categories: [{
            id: 1,
            title: 'Applications :',
            child: [{
                id: 2,
                title: 'Calendar : app'
              },
              {
                id: 3,
                title: 'Chrome : app'
              },
              {
                id: 4,
                title: 'Webstorm : app'
              },
            ],
          },
          {
            id: 5,
            title: 'Documents :',
            child: [{
                id: 6,
                title: 'vuetify :',
                child: [{
                  id: 7,
                  title: 'src :',
                  child: [{
                      id: 8,
                      title: 'index : ts'
                    },
                    {
                      id: 9,
                      title: 'bootstrap : ts'
                    },
                  ],
                }, ],
              },
              {
                id: 10,
                title: 'material2 :',
                child: [{
                  id: 11,
                  title: 'src :',
                  child: [{
                      id: 12,
                      title: 'v-btn : ts'
                    },
                    {
                      id: 13,
                      title: 'v-card : ts'
                    },
                    {
                      id: 14,
                      title: 'v-window : ts'
                    },
                  ],
                }, ],
              },
            ],
          },
          {
            id: 15,
            title: 'Downloads :',
            child: [{
                id: 16,
                title: 'October : pdf'
              },
              {
                id: 17,
                title: 'November : pdf'
              },
              {
                id: 18,
                title: 'Tutorial : html'
              },
            ],
          },
          {
            id: 19,
            title: 'Videos :',
            child: [{
                id: 20,
                title: 'Tutorials :',
                child: [{
                    id: 21,
                    title: 'Basic layouts : mp4'
                  },
                  {
                    id: 22,
                    title: 'Advanced techniques : mp4'
                  },
                  {
                    id: 23,
                    title: 'All about app : dir'
                  },
                ],
              },
              {
                id: 24,
                title: 'Intro : mov'
              },
              {
                id: 25,
                title: 'Conference introduction : avi'
              },
            ],
          },
        ],
        
      }
    },
    methods: {
      
    },
    mounted() {
      
    }
  });