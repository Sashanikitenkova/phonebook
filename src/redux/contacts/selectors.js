import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = createSelector(
    getContacts,
    getFilter,
    (contacts, filter) => {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
    }
);

export const selectLoading = state => state.contacts.loading;
