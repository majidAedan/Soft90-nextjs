'use strict';

const { Update } = require('@mui/icons-material');
const { create } = require('domain');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('applications', [
      {
        "name": "WhatsApp",
        "description": "A popular messaging app for instant communication.",
        "download_link": "https://www.whatsapp.com/download",
        "last_updated": "2024-10-20",
        "image": "https://www.cdnlogo.com/logos/w/29/whatsapp-icon.svg",
        createdAt: new Date(),
        UpdatedAt: new Date(),

      },
      {
        "name": "Instagram",
        "description": "A social media platform for sharing photos and videos.",
        "download_link": "https://www.instagram.com/download",
        "last_updated": "2024-10-15",
        "image": "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
        createdAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        "name": "Spotify",
        "description": "A music streaming app with millions of songs.",
        "download_link": "https://www.spotify.com/download",
        "last_updated": "2024-10-10",
        "image": "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-logo-spotify-symbol-3.png",
        createdAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        "name": "Zoom",
        "description": "A popular video conferencing application.",
        "download_link": "https://zoom.us/download",
        "last_updated": "2024-11-01",
        "image": "https://seeklogo.com/images/Z/zoom-icon-logo-C552F99BAC-seeklogo.com.png",
        createdAt: new Date(),
        UpdatedAt: new Date(),
      },
      {
        "name": "Adobe Photoshop",
        "description": "A professional photo editing software with advanced features.",
        "download_link": "https://www.adobe.com/products/photoshop.html",
        "last_updated": "2024-10-28",
        "image": "https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png",
        createdAt: new Date(),
        UpdatedAt: new Date(),
      }
    
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
