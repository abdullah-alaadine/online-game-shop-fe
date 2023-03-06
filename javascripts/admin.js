
  const profileButton = document.getElementById('profile-button');
  const ordersButton = document.querySelector('#orders-button');
  const addressesButton = document.querySelector('#addresses-button');
  const paymentsButton = document.querySelector('#payments-button');
  const adminbutton = document.querySelector('#admin-button');

  const profileSection = document.querySelector('#profile-section');
  const ordersSection = document.querySelector('#orders-section');
  const addressesSection = document.querySelector('#addresses-section');
  const paymentsSection = document.querySelector('#payments-section');
  const adminSection = document.querySelector('#admin-section');

  // Add event listeners to the buttons
  profileButton.addEventListener('click', () => {
    // Hide all sections
    profileSection.style.display = 'block';
    ordersSection.style.display = 'none';
    addressesSection.style.display = 'none';
    paymentsSection.style.display = 'none';
    adminSection.style.display ='none';
  });

  ordersButton.addEventListener('click', () => {
    // Hide all sections
    profileSection.style.display = 'none';
    ordersSection.style.display = 'block';
    addressesSection.style.display = 'none';
    paymentsSection.style.display = 'none';
    adminSection.style.display ='none';
  });

  addressesButton.addEventListener('click', () => {
    // Hide all sections
    profileSection.style.display = 'none';
    ordersSection.style.display = 'none';
    addressesSection.style.display = 'block';
    paymentsSection.style.display = 'none';
    adminSection.style.display ='none';
  });

  paymentsButton.addEventListener('click', () => {
    // Hide all sections
    profileSection.style.display = 'none';
    ordersSection.style.display = 'none';
    addressesSection.style.display = 'none';
    paymentsSection.style.display = 'block';
    adminSection.style.display ='none';
  });

  adminbutton.addEventListener('click', () => {
      // Hide all sections
      profileSection.style.display = 'none';
      ordersSection.style.display = 'none';
      addressesSection.style.display = 'none';
      paymentsSection.style.display = 'none';
      adminSection.style.display ='block';
  });
