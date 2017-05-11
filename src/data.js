export const services = {
  signup: {
    consumes: ['branch-created', 'branch-removed', 'branch-edited'],
    publishes: ['member-registered', 'send-email'],
  },
  core: {
    consumes: [
      'member-registered', 'member-removed', 'member-edited',
      'branch-created', 'branch-removed', 'branch-edited',
      'group-created', 'group-removed', 'group-edited',
      'admin-created', 'admin-removed', 'admin-edited',
    ],
    publishes: [
      'member-removed', 'member-edited',
      'branch-created', 'branch-removed', 'branch-edited',
      'group-created', 'group-removed', 'group-edited',
      'admin-created', 'admin-removed', 'admin-edited',
    ],
  },
  mailer: {
    consumes: ['send-email'],
    publishes: ['email-sent', 'email-failed'],
  },
  'group-mailer': {
    consumes: [
      'member-registered', 'member-removed', 'member-edited',
      'group-created', 'group-removed', 'group-edited',
    ],
    publishes: ['send-email'],
  }
};

export const eventTypes = [];
const pushEventType = eventType => {
  if (!eventTypes.includes(eventType)) {
    eventTypes.push(eventType);
  }
}
Object.keys(services).forEach(serviceName => {
  services[serviceName].consumes.forEach(pushEventType);
  services[serviceName].publishes.forEach(pushEventType);
});
eventTypes.sort();
