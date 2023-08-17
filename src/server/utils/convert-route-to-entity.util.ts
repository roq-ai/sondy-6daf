const mapping: Record<string, string> = {
  invitations: 'invitation',
  organizations: 'organization',
  questions: 'question',
  responses: 'response',
  surveys: 'survey',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
