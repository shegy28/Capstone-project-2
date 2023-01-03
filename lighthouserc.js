module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:8080']
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};