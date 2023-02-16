import { writable } from "svelte/store";

export var authStatus = writable(false)
export var notification = writable(false)
export var userAuthData = writable()
export var propertyType = writable("Flat")