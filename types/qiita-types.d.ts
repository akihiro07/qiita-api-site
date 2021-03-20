/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * In this schema file, we represents the public interface of Qiita API v2 in JSON Hyper Schema draft v4.
 */
export interface QiitaAPIV2JSONSchema {
  access_token: AccessToken
  authenticated_user: AuthenticatedUser
  comment: Comment
  expanded_template: ExpandedTemplate
  group: Group
  item: Item
  like: Like
  project: Project
  reaction: EmojiReaction
  remove_team_member: RemoveTeamMember
  tag: Tag
  tagging: Tagging
  team: Team
  team_access_token: TeamAccessToken
  team_invitation: InvitedMember
  template: Template
  user: User4
  [k: string]: unknown
}
/**
 * Access token for Qiita API v2
 */
export interface AccessToken {
  /**
   * An unique ID to identify a registered client
   */
  client_id: string
  /**
   * Authorized action scopes of the access token
   */
  scopes: string[]
  /**
   * Access token identifier string
   */
  token: string
  [k: string]: unknown
}
/**
 * An user currently authenticated by a given access token. This resources has more detailed information than normal User resource.
 */
export interface AuthenticatedUser {
  /**
   * self-description
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * Followees count
   */
  followees_count: number
  /**
   * Followers count
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * User ID
   */
  id: string
  /**
   * How many items a user posted on qiita.com (Items on Qiita Team are not included)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * Location
   */
  location: null | string
  /**
   * Customized user name
   */
  name: null | string
  /**
   * Organization which a user belongs to
   */
  organization: null | string
  /**
   * Unique integer ID
   */
  permanent_id: number
  /**
   * Profile image URL
   */
  profile_image_url: string
  /**
   * A flag whether this user is configured as team-only
   */
  team_only: boolean
  /**
   * Twitter screen name
   */
  twitter_screen_name: null | string
  /**
   * Website URL
   */
  website_url: null | string
  /**
   * Monthly image upload limit
   */
  image_monthly_upload_limit: number
  /**
   * Monthly remaining image upload size
   */
  image_monthly_upload_remaining: number
  [k: string]: unknown
}
/**
 * A comment posted on an item or a project. A comment on a project is available only on Qiita Team.
 */
export interface Comment {
  /**
   * Comment body in Markdown
   */
  body: string
  /**
   * Date-time when this data was created
   */
  created_at: string
  /**
   * Comment unique ID
   */
  id: string
  /**
   * Comment body in HTML
   */
  rendered_body: string
  /**
   * Date-time when this data was updated
   */
  updated_at: string
  user: User
  [k: string]: unknown
}
/**
 * A Qiita user (a.k.a. account)
 */
export interface User {
  /**
   * self-description
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * Followees count
   */
  followees_count: number
  /**
   * Followers count
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * User ID
   */
  id: string
  /**
   * How many items a user posted on qiita.com (Items on Qiita Team are not included)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * Location
   */
  location: null | string
  /**
   * Customized user name
   */
  name: null | string
  /**
   * Organization which a user belongs to
   */
  organization: null | string
  /**
   * Unique integer ID
   */
  permanent_id: number
  /**
   * Profile image URL
   */
  profile_image_url: string
  /**
   * A flag whether this user is configured as team-only
   */
  team_only: boolean
  /**
   * Twitter screen name
   */
  twitter_screen_name: null | string
  /**
   * Website URL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * You can preview the expanded result of a given template. This is available only on Qiita Team.
 */
export interface ExpandedTemplate {
  /**
   * An item body where variables are expanded
   */
  expanded_body: string
  /**
   * A list of tags where variables are expanded
   */
  expanded_tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * An item title where variables are expanded
   */
  expanded_title: string
  [k: string]: unknown
}
/**
 * Represents a group on Qiita Team
 */
export interface Group {
  /**
   * Date-time when this data was created
   */
  created_at: string
  /**
   * A group unique ID
   */
  id: number
  /**
   * Group name for display.
   */
  name: string
  /**
   * A flag to tell which this group is private or public.
   */
  private: boolean
  /**
   * Date-time when this data was updated
   */
  updated_at: string
  /**
   * Unique name on a team.
   */
  url_name: string
  [k: string]: unknown
}
/**
 * Represents an item posted from a user
 */
export interface Item {
  /**
   * Item body in HTML
   */
  rendered_body: string
  /**
   * Item body in Markdown
   */
  body: string
  /**
   * A flag whether this item is co-edit mode (only available on Qiita Team)
   */
  coediting: boolean
  /**
   * Comments count
   */
  comments_count: number
  /**
   * Date-time when this data was created
   */
  created_at: string
  group: Group1
  /**
   * An unique item ID
   */
  id: string
  /**
   * Likes count (only available on Qiita)
   */
  likes_count: number
  /**
   * A flag whether this item is private (only available on Qiita)
   */
  private: boolean
  /**
   * Emoji reactions count (only availabble on Qiita Team)
   */
  reactions_count: number
  /**
   * A list of tags
   */
  tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * The title of this item
   */
  title: string
  /**
   * Date-time when this data was updated
   */
  updated_at: string
  /**
   * The URL of this item
   */
  url: string
  user?: User1
  /**
   * The number of views.
   */
  page_views_count: null | number
  [k: string]: unknown
}
/**
 * Represents a group on Qiita Team
 */
export interface Group1 {
  /**
   * Date-time when this data was created
   */
  created_at: string
  /**
   * A group unique ID
   */
  id: number
  /**
   * Group name for display.
   */
  name: string
  /**
   * A flag to tell which this group is private or public.
   */
  private: boolean
  /**
   * Date-time when this data was updated
   */
  updated_at: string
  /**
   * Unique name on a team.
   */
  url_name: string
  [k: string]: unknown
}
/**
 * A Qiita user (a.k.a. account)
 */
export interface User1 {
  /**
   * self-description
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * Followees count
   */
  followees_count: number
  /**
   * Followers count
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * User ID
   */
  id: string
  /**
   * How many items a user posted on qiita.com (Items on Qiita Team are not included)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * Location
   */
  location: null | string
  /**
   * Customized user name
   */
  name: null | string
  /**
   * Organization which a user belongs to
   */
  organization: null | string
  /**
   * Unique integer ID
   */
  permanent_id: number
  /**
   * Profile image URL
   */
  profile_image_url: string
  /**
   * A flag whether this user is configured as team-only
   */
  team_only: boolean
  /**
   * Twitter screen name
   */
  twitter_screen_name: null | string
  /**
   * Website URL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * <strong>The Like API on Qiita Team has been abolished since Nov 4 2020. Please use the Emoji reaction API instead.</strong> Represents a like to an item.
 */
export interface Like {
  /**
   * Date-time when this data was created
   */
  created_at: string
  user: User2
  [k: string]: unknown
}
/**
 * A Qiita user (a.k.a. account)
 */
export interface User2 {
  /**
   * self-description
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * Followees count
   */
  followees_count: number
  /**
   * Followers count
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * User ID
   */
  id: string
  /**
   * How many items a user posted on qiita.com (Items on Qiita Team are not included)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * Location
   */
  location: null | string
  /**
   * Customized user name
   */
  name: null | string
  /**
   * Organization which a user belongs to
   */
  organization: null | string
  /**
   * Unique integer ID
   */
  permanent_id: number
  /**
   * Profile image URL
   */
  profile_image_url: string
  /**
   * A flag whether this user is configured as team-only
   */
  team_only: boolean
  /**
   * Twitter screen name
   */
  twitter_screen_name: null | string
  /**
   * Website URL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * Represents a project on Qiita Team (only available on Qiita Team).
 */
export interface Project {
  /**
   * The projects page body in HTML
   */
  rendered_body: string
  /**
   * A flag whether this project is archived
   */
  archived: boolean
  /**
   * The project page body in Markdown
   */
  body: string
  /**
   * Date-time when this data was created
   */
  created_at: string
  /**
   * A project ID unique in its team
   */
  id: number
  /**
   * The name of a project
   */
  name: string
  /**
   * Emoji reactions count
   */
  reactions_count: number
  /**
   * Date-time when this data was updated
   */
  updated_at: string
  [k: string]: unknown
}
/**
 * An emoji reaction on Qiita Team (only availabble on Qiita Team).
 */
export interface EmojiReaction {
  /**
   * Date-time when this data was created
   */
  created_at: string
  /**
   * An emoji image URL
   */
  image_url: string
  /**
   * A unique emoji name
   */
  name: string
  user: User3
  [k: string]: unknown
}
/**
 * A Qiita user (a.k.a. account)
 */
export interface User3 {
  /**
   * self-description
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * Followees count
   */
  followees_count: number
  /**
   * Followers count
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * User ID
   */
  id: string
  /**
   * How many items a user posted on qiita.com (Items on Qiita Team are not included)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * Location
   */
  location: null | string
  /**
   * Customized user name
   */
  name: null | string
  /**
   * Organization which a user belongs to
   */
  organization: null | string
  /**
   * Unique integer ID
   */
  permanent_id: number
  /**
   * Profile image URL
   */
  profile_image_url: string
  /**
   * A flag whether this user is configured as team-only
   */
  team_only: boolean
  /**
   * Twitter screen name
   */
  twitter_screen_name: null | string
  /**
   * Website URL
   */
  website_url: null | string
  [k: string]: unknown
}
/**
 * 指定のユーザーをチームから離脱させます(自身とチームのオーナーはこのAPIでは離脱させられません。)。
 */
export interface RemoveTeamMember {
  [k: string]: unknown
}
/**
 * A tag attached to an item
 */
export interface Tag {
  /**
   * Followes count
   */
  followers_count: number
  /**
   * Tag Icon URL
   */
  icon_url: null | string
  /**
   * Tag name
   */
  id: string
  /**
   * Items count
   */
  items_count: number
  [k: string]: unknown
}
/**
 * Represents an association between an item and a tag.
 */
export interface Tagging {
  /**
   * Tag name
   */
  name: string
  versions: string[]
  [k: string]: unknown
}
/**
 * Represents a team on Qiita Team (only available on Qiita Team).
 */
export interface Team {
  /**
   * A flag whether this team is active or not
   */
  active: boolean
  /**
   * A unique team ID
   */
  id: string
  /**
   * The team name configured for this team
   */
  name: string
  [k: string]: unknown
}
/**
 * Access token for Qiita API v2 (only available on Qiita Team).
 */
export interface TeamAccessToken {
  /**
   * An unique ID to identify a registered client
   */
  client_id: string
  /**
   * Authorized action scopes of the team access token
   */
  scopes: string[]
  /**
   * Team access token identifier string
   */
  token: string
  [k: string]: unknown
}
/**
 * Represents members who are invited to on Qiita Team (only available on Qiita Team. administrative privileges required).
 */
export interface InvitedMember {
  /**
   * Email address of the invited member
   */
  email: string
  /**
   * Invitation URL. The expiration date is one day.
   */
  url: string
  [k: string]: unknown
}
/**
 * Represents a template for generating an item boilerplate (only available on Qiita Team).
 */
export interface Template {
  /**
   * The body of this template
   */
  body: string
  /**
   * A unique template ID
   */
  id: number
  /**
   * A template name
   */
  name: string
  /**
   * An item body where variables are expanded
   */
  expanded_body: string
  /**
   * A list of tags where variables are expanded
   */
  expanded_tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * An item title where variables are expanded
   */
  expanded_title: string
  /**
   * A list of tags
   */
  tags: {
    name: string
    versions?: string[]
    [k: string]: unknown
  }[]
  /**
   * A template title where variables are to be expanded
   */
  title: string
  [k: string]: unknown
}
/**
 * A Qiita user (a.k.a. account)
 */
export interface User4 {
  /**
   * self-description
   */
  description: null | string
  /**
   * Facebook ID
   */
  facebook_id: null | string
  /**
   * Followees count
   */
  followees_count: number
  /**
   * Followers count
   */
  followers_count: number
  /**
   * GitHub ID
   */
  github_login_name: null | string
  /**
   * User ID
   */
  id: string
  /**
   * How many items a user posted on qiita.com (Items on Qiita Team are not included)
   */
  items_count: number
  /**
   * LinkedIn ID
   */
  linkedin_id: null | string
  /**
   * Location
   */
  location: null | string
  /**
   * Customized user name
   */
  name: null | string
  /**
   * Organization which a user belongs to
   */
  organization: null | string
  /**
   * Unique integer ID
   */
  permanent_id: number
  /**
   * Profile image URL
   */
  profile_image_url: string
  /**
   * A flag whether this user is configured as team-only
   */
  team_only: boolean
  /**
   * Twitter screen name
   */
  twitter_screen_name: null | string
  /**
   * Website URL
   */
  website_url: null | string
  [k: string]: unknown
}
