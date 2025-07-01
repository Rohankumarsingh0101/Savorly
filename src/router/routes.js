const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'pricing', component: () => import('pages/PricingPage.vue') },
      { path: 'testimonials', component: () => import('pages/TestimonialsPage.vue') },
      { path: 'faq', component: () => import('pages/FaqPage.vue') },
      { path: 'blog', component: () => import('pages/BlogPage.vue') },
      { path: 'blog/:slug', component: () => import('pages/BlogPostPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
