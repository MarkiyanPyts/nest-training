describe('my test', () => {
  it('returns true', () => {
    expect(true).toEqual(true);
  });
});

class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }
    console.log('re', idx);
    this.friends.splice(idx, 1);
  }
}

describe('FriendList', () => {
  let friendsList;

  beforeEach(() => {
    //excecutes before each it
    friendsList = new FriendsList();
  });

  it('initializes friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('adds a friend to a list', () => {
    friendsList.addFriend('Mark');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendsList.announceFriendship = jest.fn(); //created mock function
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Mark');

    expect(friendsList.announceFriendship).toHaveBeenCalledWith('Mark');
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('Mark');
      expect(friendsList.friends[0]).toEqual('Mark');

      friendsList.removeFriend('Mark');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend('Mark')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
