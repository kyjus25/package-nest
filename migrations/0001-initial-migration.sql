CREATE DATABASE pulsar;
\c pulsar;

-- Create packages Table

CREATE EXTENSION pgcrypto;

CREATE TABLE packages (
  pointer UUID DEFAULT GEN_RANDOM_UUID() PRIMARY KEY,
  name VARCHAR(128) NOT NULL UNIQUE,
  created TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  creation_method VARCHAR(128),
  downloads BIGINT NOT NULL DEFAULT 0,
  stargazers_count BIGINT NOT NULL DEFAULT 0,
  original_stargazers BIGINT NOT NULL DEFAULT 0,
  data JSONB
);

-- Create names Table

CREATE TABLE names (
  name VARCHAR(128) NOT NULL PRIMARY KEY,
  pointer UUID NOT NULL REFERENCES packages(pointer)
);

-- Create users Table

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  username VARCHAR(256) NOT NULL UNIQUE,
  node_id VARCHAR(256) UNIQUE,
  avatar VARCHAR(100),
  data JSONB
);

-- Create stars Table

CREATE TABLE stars (
  package UUID NOT NULL REFERENCES packages(pointer),
  userid INTEGER NOT NULL REFERENCES users(id),
  PRIMARY KEY (package, userid)
);

-- Create versions Table

CREATE TYPE versionStatus AS ENUM('latest', 'published', 'removed');

CREATE TABLE versions (
    id SERIAL PRIMARY KEY,
    package UUID NOT NULL REFERENCES packages(pointer),
    status versionStatus NOT NULL,
    semver VARCHAR(256) NOT NULL,
    license VARCHAR(128) NOT NULL,
    engine JSONB NOT NULL,
    meta JSONB
);

------------------------------------------------------------------------------

-- Enter our Test data into the Database.

INSERT INTO packages (pointer, name, creation_method, downloads, stargazers_count, data, original_stargazers)
VALUES (
  'd28c7ce5-c9c4-4fb6-a499-a7c6dcec355b', 'language-css', 'user made', 400004, 76,
  '{"name": "language-css", "readme": "Cool readme", "metadata": {"bugs": {"url": "https://github.com/atom/language-css/issues"},
  "name": "language-css", "engines": {"atom": "*","node":"*"},"license":"MIT","version":"0.45.7","homepage":"http://atom.github.io/language-css",
  "keywords":["tree-sitter"],"repository":{"url":"https://github.com/atom/language-css.git","type":"git"},"description":"CSS Support in Atom",
  "dependencies":{"tree-sitter-css":"^0.19.0"},"devDependencies":{"coffeelint":"^1.10.1"}},"repository":{"url":"https://github.com/atom/langauge-css",
  "type":"git"}}', 76
), (
  'd27dbd37-e58e-4e02-b804-9e3e6ae02fb1', 'language-cpp', 'user made', 849156, 91,
  '{"name": "language-cpp", "description": "C++ Support in Atom", "keywords": ["tree-sitter"]}', 91
), (
  'ee87223f-65ab-4a1d-8f45-09fcf8e64423', 'hydrogen', 'Migrated from Atom.io', 2562844, 821,
  '{"name": "hydrogen", "readme": "Hydrogen Readme", "metadata": { "main": "./dist/main", "name": "Hydrogen",
  "author": "nteract contributors", "engines": {"atom": ">=1.28.0 <2.0.0"}, "license": "MIT", "version": "2.16.3"}}', 821
), (
  'aea26882-8459-4725-82ad-41bf7aa608c3', 'atom-clock', 'Migrated from Atom.io', 1090899, 528,
  '{"name": "atom-clock", "readme": "Atom-clok!", "metadata": { "main": "./lib/atom-clock", "name": "atom-clock",
  "author": { "url": "https://github.com/b3by", "name": "Antonio Bevilacqua", "email": "b3by.in.the3.sky@gmail.com"}}}', 528
), (
  '1e19da12-322a-4b37-99ff-64f866cc0cfa', 'hey-pane', 'Migrated from Atom.io', 206804, 176,
  '{"name": "hey-pane", "readme": "hey-pane!", "metadata": { "main": "./lib/hey-pane", "license": "MIT"}}', 176
), (
  'a0ef01cb-720e-4c0d-80c5-f0ed441f31fc', 'atom-material-ui', 'Migrated from Atom.io', 2509605, 1772,
  '{"name": "atom-material-ui", "readme": "ATOM!"}', 1772
), (
  '28952de5-ddbf-41a8-8d87-5d7e9d7ad7ac', 'atom-material-syntax', 'Migrated from Atom.io', 1743927, 1309,
  '{"name": "atom-material-syntax"}', 1309
);

INSERT INTO names (name, pointer)
VALUES (
  'language-css', 'd28c7ce5-c9c4-4fb6-a499-a7c6dcec355b'
), (
  'language-cpp', 'd27dbd37-e58e-4e02-b804-9e3e6ae02fb1'
), (
  'hydrogen', 'ee87223f-65ab-4a1d-8f45-09fcf8e64423'
), (
  'atom-clock', 'aea26882-8459-4725-82ad-41bf7aa608c3'
), (
  'hey-pane', '1e19da12-322a-4b37-99ff-64f866cc0cfa'
), (
  'atom-material-ui', 'a0ef01cb-720e-4c0d-80c5-f0ed441f31fc'
), (
  'atom-material-syntax', '28952de5-ddbf-41a8-8d87-5d7e9d7ad7ac'
);

INSERT INTO versions (package, status, semver, license, engine, meta)
VALUES (
  'd28c7ce5-c9c4-4fb6-a499-a7c6dcec355b', 'published', '0.45.7', 'MIT', '{"atom": "*", "node": "*"}',
  '{"name": "language-css", "description": "CSS Support in Atom", "keywords": ["tree-sitter"]}'
), (
  'd28c7ce5-c9c4-4fb6-a499-a7c6dcec355b', 'latest', '0.46.0', 'MIT', '{"atom": "*", "node": "*"}',
  '{"name": "language-css", "description": "CSS Support in Atom", "keywords": ["tree-sitter"]}'
), (
  'd28c7ce5-c9c4-4fb6-a499-a7c6dcec355b', 'published', '0.45.0', 'MIT', '{"atom": "*", "node": "*"}',
  '{"name":"language-css", "description": "CSS Support in Atom", "keywords": ["tree-sitter"]}'
), (
  'd27dbd37-e58e-4e02-b804-9e3e6ae02fb1', 'published', '0.11.8', 'MIT', '{"atom": "*", "node": "*"}',
  '{"name": "language-cpp", "description": "C++ Support in Atom", "keywords": ["tree-sitter"]}'
), (
  'd27dbd37-e58e-4e02-b804-9e3e6ae02fb1', 'latest', '0.11.9', 'MIT', '{"atom": "*", "node": "*"}',
  '{"name": "language-cpp", "description": "C++ Support in Atom", "keywords": ["tree-sitter"]}'
), (
  'ee87223f-65ab-4a1d-8f45-09fcf8e64423', 'latest', '2.16.3', 'MIT', '{"atom": "*"}',
  '{"name": "Hydrogen", "dist": {"tarball": "https://www.atom.io/api/packages/hydrogen/version/2.16.3/tarball"}}'
), (
  'aea26882-8459-4725-82ad-41bf7aa608c3', 'latest', '0.1.18', 'MIT', '{"atom": "*"}',
  '{"name": "atom-clock", "dist": {"tarball": "https://www.atom.io/api/packages/atom-clock/version/1.18.0/tarball"}}'
), (
  '1e19da12-322a-4b37-99ff-64f866cc0cfa', 'latest', '1.2.0', 'MIT', '{"atom": "*"}',
  '{"name":"hey-pane", "dist": {"tarball": "https://www.atom.io/api/packages/hydrogen/version/1.2.0/tarball"}}'
), (
  'a0ef01cb-720e-4c0d-80c5-f0ed441f31fc', 'latest', '2.1.3', 'MIT', '{"atom": "*"}',
  '{"name": "atom-material-ui", "dist": {"tarball": "https://www.atom.io/api/packages/atom-material-ui/version/2.1.3/tarball"}}'
), (
  '28952de5-ddbf-41a8-8d87-5d7e9d7ad7ac', 'latest', '1.0.8', 'MIT', '{"atom":"*"}',
  '{"name": "atom-material-syntax", "dist": {"tarball":"https://www.atom/io/api/packages/atom-material-syntax/version/1.0.8/tarball"}}'
);

INSERT INTO users (username, node_id, avatar)
VALUES (
  'dever', 'dever-nodeid', 'https://roadtonowhere.com'
), (
  'no_perm_user', 'no-perm-user-nodeid', 'https://roadtonowhere.com'
), (
  'admin_user', 'admin-user-nodeid', 'https://roadtonowhere.com'
), (
  'has-no-stars', 'has-no-stars-nodeid', 'https://roadtonowhere.com'
), (
  'has-all-stars', 'has-all-stars-nodeid', 'https://roadtonowhere.com'
);

INSERT INTO stars (package, userid)
VALUES (
  'd28c7ce5-c9c4-4fb6-a499-a7c6dcec355b', 5
), (
  'd27dbd37-e58e-4e02-b804-9e3e6ae02fb1', 5
), (
  'ee87223f-65ab-4a1d-8f45-09fcf8e64423', 5
), (
  'aea26882-8459-4725-82ad-41bf7aa608c3', 5
), (
  '1e19da12-322a-4b37-99ff-64f866cc0cfa', 5
), (
  'a0ef01cb-720e-4c0d-80c5-f0ed441f31fc', 5
), (
  '28952de5-ddbf-41a8-8d87-5d7e9d7ad7ac', 5
);
