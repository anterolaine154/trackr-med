// sophisticated_code.js

// This code is a sophisticated implementation of a contact management system
// It allows users to create, retrieve, update, and delete contacts from a database

// Create a Contact class to represent a contact
class Contact {
  constructor(id, firstName, lastName, phoneNumber, email) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a ContactManager class to manage contacts
class ContactManager {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  findContactById(id) {
    return this.contacts.find(contact => contact.id === id);
  }

  updateContactById(id, updatedContact) {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      this.contacts[contactIndex] = updatedContact;
      return true;
    }
    return false;
  }

  deleteContactById(id) {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      this.contacts.splice(contactIndex, 1);
      return true;
    }
    return false;
  }

  getAllContacts() {
    return this.contacts;
  }

  getContactsByLastName(lastName) {
    return this.contacts.filter(contact => contact.lastName === lastName);
  }
}

// Create a contact manager instance
const contactManager = new ContactManager();

// Add some contacts
const contact1 = new Contact(1, "John", "Doe", "1234567890", "john.doe@example.com");
const contact2 = new Contact(2, "Jane", "Smith", "0987654321", "jane.smith@example.com");
const contact3 = new Contact(3, "Michael", "Johnson", "5555555555", "michael.j@example.com");

// Add contacts to the contact manager
contactManager.addContact(contact1);
contactManager.addContact(contact2);
contactManager.addContact(contact3);

// Get all contacts
const allContacts = contactManager.getAllContacts();
console.log("All Contacts:");
console.log(allContacts);

// Find contact by ID
const contactById = contactManager.findContactById(2);
console.log("Contact by ID (2):");
console.log(contactById);

// Update contact
const updatedContact = new Contact(3, "Michael", "Johnson Jr.", "5555555555", "michael.johnson@example.com");
const updateResult = contactManager.updateContactById(3, updatedContact);
console.log("Update Contact (ID: 3):");
console.log(updateResult);

// Get contacts by last name
const contactsByLastName = contactManager.getContactsByLastName("Smith");
console.log("Contacts by Last Name (Smith):");
console.log(contactsByLastName);

// Delete contact
const deleteResult = contactManager.deleteContactById(1);
console.log("Delete Contact (ID: 1):");
console.log(deleteResult);

// Get all contacts after deletion
const contactsAfterDeletion = contactManager.getAllContacts();
console.log("All Contacts After Deletion:");
console.log(contactsAfterDeletion);