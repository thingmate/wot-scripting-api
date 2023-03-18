import { ExposedThingInit } from 'wot-typescript-definitions';

const START_PLUG_STATE_ENUM = ['on', 'off'];

export const SMART_PLUG_TD = {
  properties: {
    state: {
      enum: START_PLUG_STATE_ENUM,
    },
    consumption: {
      type: 'object',
      properties: {
        current: {
          type: 'number',
          unit: 'A',
        },
        voltage: {
          type: 'number',
          unit: 'V',
        },
        power: {
          type: 'number',
          unit: 'W',
        },
      },
      readOnly: true,
    },
    consumptionHistory: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          power: {
            type: 'number',
            unit: 'W',
          },
          start: {
            title: 'start date as timestamp in ms',
            type: 'number',
            unit: 'ms',
          },
          end: {
            title: 'end date as timestamp in ms',
            type: 'number',
            unit: 'ms',
          },
        },
      },
      readOnly: true,
    },
  },
  actions: {
    toggle: {
      input: {
        enum: START_PLUG_STATE_ENUM,
      },
      output: {
        enum: START_PLUG_STATE_ENUM,
      },
    },
  },
} satisfies ExposedThingInit;

