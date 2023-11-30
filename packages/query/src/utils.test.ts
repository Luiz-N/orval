import { describe, expect, it } from 'vitest';
import {
  makeRouteSafe,
  vueMakeRouteReactive,
  wrapRouteParameters,
} from './utils';

describe('wrapRouteParameters', () => {
  it('wraps parameters correctly', () => {
    const result = wrapRouteParameters(
      '/user/${id}/profile',
      'prefix-',
      '-suffix',
    );
    expect(result).toBe('/user/${prefix-id-suffix}/profile');
  });

  it('handles no parameters gracefully', () => {
    const result = wrapRouteParameters('/user/profile', 'prefix-', '-suffix');
    expect(result).toBe('/user/profile');
  });

  it('handles empty route', () => {
    const result = wrapRouteParameters('', 'prefix-', '-suffix');
    expect(result).toBe('');
  });
});

describe('vueMakeRouteReactive', () => {
  it('makes Vue route parameters reactive', () => {
    const result = vueMakeRouteReactive('/user/${id}/profile/${bla}');
    expect(result).toBe('/user/${unref(id)}/profile/${unref(bla)}');
  });

  it('handles no parameters gracefully', () => {
    const result = vueMakeRouteReactive('/user/profile');
    expect(result).toBe('/user/profile');
  });

  it('handles empty route', () => {
    const result = vueMakeRouteReactive('');
    expect(result).toBe('');
  });
});

describe('makeRouteSafe', () => {
  it('encodes URI components in parameters', () => {
    const result = makeRouteSafe('/search/${query}/bla/${something}');
    expect(result).toBe(
      '/search/${encodeURIComponent(String(query))}/bla/${encodeURIComponent(String(something))}',
    );
  });

  it('handles no special characters gracefully', () => {
    const result = makeRouteSafe('/search/query');
    expect(result).toBe('/search/query');
  });

  it('handles empty route', () => {
    const result = makeRouteSafe('');
    expect(result).toBe('');
  });
});
