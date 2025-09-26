import { type AppItem } from '../types/appTypes.ts';

import PhoneMockup from '../assets/phone_apps.png';

export const appsData: AppItem[] = [
  {
    id: 1,
    name: "Fortuna Números de la suerte",
    description: "Creación de números de la suerte",
    category: "Entretenimiento",
    rating: 4.8,
    downloads: "1K+",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.camadi.fortunenumerosuerte&pcampaignid=web_share",
    appStoreLink: "#",
    mockupImage: PhoneMockup // Usamos la variable importada
  },
  {
    id: 2,
    name: "MiTVs",
    description: "Reproductor de contenido M3U8",
    category: "Entretenimiento",
    rating: 4.8,
    downloads: "100+",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.camadi.mitvs&pcampaignid=web_share",
    appStoreLink: "#",
    mockupImage: PhoneMockup // Usamos la variable importada
  },
  {
    id: 3,
    name: "Rifitas",
    description: "Gestión de rifas",
    category: "Herramientas",
    rating: 4.8,
    downloads: "10+",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.camadi.rifitas&pcampaignid=web_share",
    appStoreLink: "#",
    mockupImage: PhoneMockup // Usamos la variable importada
  }

  ];