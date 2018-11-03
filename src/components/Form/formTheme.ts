const formTheme = {
  // inputs for inline editing
  inline: {
    invalid: {
      backgroundColor: 'transparent',
      borderColor: '#f0506e',
      color: '#f0506e',
    },
    valid: {
      active: {
        backgroundColor: 'transparent',
        borderColor: '#1e87f0',
        color: '#666',
      },
      disabled: {
        backgroundColor: '#f8f8f8',
        borderColor: '#e5e5e5',
        color: '#999',
      },
      hover: {
        backgroundColor: 'transparent',
        borderColor: '#e5e5e5',
        color: '#666',
      },
      normal: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '#666',
      },
    },
  },
  // radio and checkbox styles
  misc: {
    invalid: {
      backgroundColor: 'transparent',
      borderColor: '#f0506e',
    },
    valid: {
      active: {
        backgroundColor: 'transparent',
        borderColor: '#1e87f0',
      },
      checked: {
        backgroundColor: '#1e87f0',
        borderColor: 'transparent',
      },
      disabled: {
        backgroundColor: '#f8f8f8',
        bordeColor: '#e5e5e5',
      },
      normal: {
        backgroundColor: 'transparent',
        borderColor: '#ccc',
      },
    },
  },
  // text input, textarea, and select styles
  regular: {
    invalid: {
      backgroundColor: '#fff',
      borderColor: '#f0506e',
      color: '#f0506e',
    },
    valid: {
      active: {
        backgroundColor: '#fff',
        borderColor: '#1e87f0',
        color: '#666',
      },
      disabled: {
        backgroundColor: '#f8f8f8',
        borderColor: '#e5e5e5',
        color: '#999',
      },
      normal: {
        backgroundColor: '#fff',
        borderColor: '#e5e5e5',
        color: '#666',
      },
    },
  },
  toggle: {
    checked: {
      backgroundColor: '#1e87f0',
    },
    normal: {
      backgroundColor: '#ccc',
    },
  },
};

export default formTheme;
