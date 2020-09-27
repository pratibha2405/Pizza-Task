const routes = [
  {
    path: "/",
    name: "Menu",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("pages/Home.vue")
      },
      {
        path: "DisplayItems",
        name: "DisplayItems",
        component: () => import("pages/DisplayItems.vue")
      },
      {
        path: "OrderStatus",
        name: "OrderStatus",
        component: () => import("pages/OrderStatus.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
